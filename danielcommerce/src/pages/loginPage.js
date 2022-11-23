import LoginButton from "../components/LoginButton";

const loginPage = () => {
  return (
    <>
      <form onSubmit={() => {}} classname="formbutton">
        <div>
          <label>
            Email:
            <input type="text" name="name" value="Email" />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <LoginButton />
    </>
  );
};
// VIEW PAGE 301 IN UDEMY REACT COURSE FOR AUTHO
export default loginPage;
