import { Button, Card } from "react-bootstrap";
import "./InformationProfile.css";
import { format } from "date-fns";
import {
  BsCalendarDate,
  BsFillFlagFill,
  BsFillPersonCheckFill,
  BsGeoAlt,
  BsPass,
  BsPassport,
  BsPeople,
  BsPersonVcard,
  BsPostcard,
  BsPower,
  BsTelephone,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
  phoneNumber: string;
  visa: string | null;
  passport: string | null;
  residentPermit: string | null;
  dateOfBirth: string | null;
  createdDate: string;
  updatedDate: string;
  deletedDate: string | null;
  nik: string | null;
  nationality: string | null;
}

interface UserData {
  email: string;
  usersDetails: UserDetails;
}

const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

const InformationProfile: React.FC = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await fetch(base_url + "/user-detail/logged-in-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const responseData = await response.json();
        setUserData(responseData.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    // Memeriksa status edit di localStorage saat komponen dimuat
    const editStatus = localStorage.getItem("isEditClicked");
    if (editStatus === "true") {
      setIsEditClicked(true);
    }
    if (editStatus === "false") {
      navigate("/profile");
    }
  }, []);

  const handleEditClick = () => {
    setIsEditClicked(true);
    localStorage.setItem("isEditClicked", "true");
    navigate("/profile-edit");
  };

  return (
    <div>
      {userData && (
        <Card className="profile-card mx-0 shadow-none">
          <Card.Body>
            <table className="profile-table">
              <h4
                className="tittle"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1c1c1e",
                }}
              >
                Informasi Akun
              </h4>
              <tbody>
                <tr>
                  <td className="label">
                    <BsFillPersonCheckFill size={22} className="icon" />
                    <span>Nama Depan</span>
                  </td>
                  <td>{userData.usersDetails.firstName}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsFillPersonCheckFill size={22} className="icon" />
                    <span>Nama Belakang</span>
                  </td>
                  <td>{userData.usersDetails.lastName}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsCalendarDate size={22} className="icon" />
                    <span>Tanggal Lahir</span>
                  </td>
                  <td>{formatDate(userData.usersDetails.dateOfBirth)}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsGeoAlt size={22} className="icon" />
                    <span>Alamat</span>
                  </td>
                  <td>{userData.usersDetails.address}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsPeople size={22} className="icon" />
                    <span>Jenis Kelamin</span>
                  </td>
                  <td>{userData.usersDetails.gender}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsTelephone size={22} className="icon" />
                    <span>Nomor Ponsel</span>
                  </td>
                  <td>{userData.usersDetails.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsPassport size={22} className="icon" />
                    <span>Visa</span>
                  </td>
                  <td>{userData.usersDetails.visa}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsPass size={22} className="icon" />
                    <span>Passport</span>
                  </td>
                  <td>{userData.usersDetails.passport}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsPostcard size={22} className="icon" />
                    <span>Resident Permit</span>
                  </td>
                  <td>{userData.usersDetails.residentPermit}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsPersonVcard size={22} className="icon" />
                    <span>NIK</span>
                  </td>
                  <td>{userData.usersDetails.nik}</td>
                </tr>
                <tr>
                  <td className="label">
                    <BsFillFlagFill size={22} className="icon" />
                    <span>Kewarnegaraan</span>
                  </td>
                  <td>{userData.usersDetails.nationality}</td>
                </tr>
              </tbody>
            </table>
            <Button
              variant="primary"
              className="button-edit mb-3 mt-3"
              onClick={handleEditClick}
            >
              Edit Profile
            </Button>
            <Button variant="danger" className="button-keluar mb-3">
              <div className="d-flex align-items-center justify-content-center ">
                <BsPower className="icon-power-off" />
                Keluar Akun
              </div>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default InformationProfile;
