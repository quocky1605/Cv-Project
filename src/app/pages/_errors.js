function Error({ statusCode }) {
  return (
    <div>
      <p>
        {statusCode
          ? `An Error ${statusCode} occurred on sever`
          : `An Error occurred on client`}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default Error;
