function ProcessingServiceCard({ processingServiceData }) {
  return (
    <>
      <h3>Processing</h3>
      {processingServiceData ? (
        <div>
          <div>Parts Changed: {processingServiceData?.partsChanged}</div>
          <div>Operations: {processingServiceData?.operations}</div>
          <div>Other Issues: {processingServiceData?.otherIssues}</div>
          <div>
            Repaired Other Issues: {processingServiceData?.repairedOtherIssues ? "Yes" : "No"}
          </div>
          <div>Repair Duration: {processingServiceData?.repairDuration}</div>
        </div>
      ) : (
        <p>Processing data has not been entered</p>
      )}
    </>
  );
}

export default ProcessingServiceCard;
