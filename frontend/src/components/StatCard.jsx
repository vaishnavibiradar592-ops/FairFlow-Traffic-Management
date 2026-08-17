export default function StatCard({
  title,
  value,
  unit,
  icon
}) {

  return (

    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <p>{title}</p>

        <h2>{value}</h2>

        {unit && (
          <span>{unit}</span>
        )}

      </div>

    </div>

  );
}