import { useState, useEffect } from "react";
import styles from "app.module.css";
import ButtonComponent from "@components/ButtonComponent";
import LinkComponent from "@components/LinkComponent";
import InputComponent from "@components/InputComponent";
import SkeletonComponent from "@components/SkeletonComponent";
import img1 from "./assets/images/img1.jpg";
import CardComponent from "@components/CardComponent";

function App() {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const onFirstButtonClick = () => {
    console.log("First button clicked");
  };

  const onSecondButtonClick = () => {
    console.log("Second button clicked");
  };

  const handleUsernameChange = (newUsername: string) => {
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      username: newUsername,
    }));
  };

  const handlePasswordChange = (newPassword: string) => {
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: newPassword,
    }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <>
      <h1>Reusable TypeScript components</h1>
      {/* Buttons */}
      <h2>Buttons</h2>
      <div className={`${styles.flex_group}`}>
        <ButtonComponent
          disabled={false}
          value="Reusable button"
          action={onFirstButtonClick}
        />
        <ButtonComponent
          disabled={false}
          value="Second reusable button"
          action={onSecondButtonClick}
          className="blue"
          aria-label="Second button"
        />
      </div>
      {/* Links */}
      <h2>Links</h2>
      <div className={`${styles.flex_group}`}>
        <LinkComponent
          href="/link-path"
          text="This is first link"
          className="basic"
        />
        <LinkComponent
          href="/link-path"
          text="This is button styled link"
          className="button_styled"
        />
      </div>
      {/* Inputs */}
      <h2>Inputs</h2>
      <div className={`${styles.input_group}`}>
        <InputComponent
          type="text"
          label="Username"
          value={userCredentials.username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          labelClassName="custom_label"
          name="username"
        />
        <InputComponent
          type="password"
          label="Password"
          value={userCredentials.password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          inputClassName="custom_input"
        />
      </div>
      {/* Skeletons */}
      <h2>Skeletons</h2>
      <div className={`${styles.flex_group}`}>
        <div style={{ flex: "1 1 200px" }}>
          <SkeletonComponent width="100%" height="40px" margin="0px 0 10px" />
          <SkeletonComponent width="100%" height="40px" margin="10px 0" />
          <SkeletonComponent width="100%" height="40px" margin="10px 0" />
          <SkeletonComponent width="100%" height="40px" margin="10px 0 0" />
        </div>
        {isLoading ? (
          <SkeletonComponent width="200px" height="200px" theme="purple" />
        ) : (
          <img
            className={`${styles.skeleton_img}`}
            src={img1}
            alt="image number one"
          />
        )}
      </div>
      {/* Cards */}
      <h2>Cards</h2>
      <div className={`${styles.flex_group}`}>
        <CardComponent
          title="First card"
          imageUrl="https://images.pexels.com/photos/4465126/pexels-photo-4465126.jpeg"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            perferendis.
          </p>
        </CardComponent>
        <CardComponent
          title="Second card"
          imageUrl="https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="image of camera"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
            deserunt consequatur, dolor exercitationem quis ea eum doloremque
            sequi recusandae.
          </p>
        </CardComponent>
        {/* Card skeleton demo */}
        <CardComponent
          title="Skeleton demo"
          imageUrl="https://images.pexels.com/photos/4465126/pexels-photo-4465126.jpeg"
          isLoading={isLoading}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            perferendis.
          </p>
        </CardComponent>
      </div>
    </>
  );
}

export default App;
