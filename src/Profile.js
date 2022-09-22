import styles from "./Profile.module.css";

const Profile = (props) => {
  let user = props.function();

  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"100%"} />
      </div>
      <div className="col-sm-9">
        <h3 style={{ backgroundColor: "pink" }}>
          {user.name} {user.lastname}
        </h3>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
        <h4 className={styles.aboutMe}>Обо мне:</h4>
        <p className={styles.paragraph}>{user.about}</p>
      </div>
    </div>
  );
};

export default Profile;
