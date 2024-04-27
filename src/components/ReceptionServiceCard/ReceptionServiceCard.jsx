function ReceptionServiceCard({ receptionServiceData }) {
  return (
    <>
      <h3>Reception</h3>
      {receptionServiceData ? (
        <div>
          <div>Service Type: {receptionServiceData?.serviceType}</div>
          <div>Is Scratched: {receptionServiceData?.isScratched ? "Yes" : "No"}</div>
          <div>Is Damaged: {receptionServiceData?.isDamaged ? "Yes" : "No"}</div>
          {receptionServiceData?.isScratched && (
            <div>Scratched Location: {receptionServiceData?.scratchedLocation}</div>
          )}
          {receptionServiceData?.isDamaged && (
            <div>Damage Location: {receptionServiceData?.damageLocation}</div>
          )}
          <div>Mentioned Problems: {receptionServiceData?.mentionedProblems}</div>
        </div>
      ) : (
        <p>Reception data has not been entered</p>
      )}
    </>
  );
}

export default ReceptionServiceCard;
