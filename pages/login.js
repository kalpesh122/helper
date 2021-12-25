import Head from "next/head";

export default () => (
    <>
        <Head>
            <title>Login with Google</title>
            <link rel="stylesheet" href="/stylesheets/login.css" />
        </Head>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <div className="google-btn">
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className="btn-text"><b>Sign in with google</b></p>
        </div>
    </>
);

export const getServerSideProps = () => ({});