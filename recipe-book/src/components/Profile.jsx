import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editing, setEditing] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleUpdateProfile = () => {
    // Perform actions to update the user's profile with new information
    // (e.g., make an API call to update the user's profile).

    // For demonstration purposes, let's log the updated information to the console.
    console.log("Updated profile:", {
      name: user.name,
      email: user.email,
      phoneNumber: phoneNumber,
    });

    // Reset the form fields and exit editing mode.
    setPhoneNumber("");
    setEditing(false);
  };
  console.log(user, 'user');

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        {editing ? (
          <>
            <label>
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <button onClick={handleUpdateProfile}>Save Changes</button>
          </>
        ) : (
          <p>
            Phone Number: {user.phoneNumber || "Not provided"}
            <button onClick={handleEditToggle}>Edit Profile</button>
          </p>
        )}
      </div>
    )
  );
};

export default Profile;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default Profile;