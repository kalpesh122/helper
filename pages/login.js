import Head from "next/head";

export default () => (
    <>
        <Head>
            <title>Login with Google</title>
            <link rel="stylesheet" href="/stylesheets/login.css" />
        </Head>
        <button>Login with Google</button>
    </>
);

export const getServerSideProps = () => ({});