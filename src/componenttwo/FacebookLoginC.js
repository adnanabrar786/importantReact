import React, {useState} from 'react';
import FacebookLoginBtn from 'react-facebook-login';

const FacebooLoginC = () => {

    const [accessToken, setAccessToken] = useState("");

    const componentClicked = data => {
        // console.log("data", data);
        console.log("facebook button clicked");
      };
    
      const responseFacebook = (response) => {
        // console.log(response.accessToken);
        console.log(response);
        setAccessToken(response.accessToken);
        console.log(response.accessToken);
      };

    return (
        <>
            <FacebookLoginBtn
                  // appId="255290430038457"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        </>
    );
};

export default FacebooLoginC;
