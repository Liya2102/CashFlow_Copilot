function StatCard({
  title,
  value,
  subtitle,
  icon,
  variant = "purple",
}) {

  return (

    <div className={`stat-card ${variant}`}>

      <div className="stat-card-top">

        <div className="stat-icon">

          {icon}

        </div>

      </div>


      <div className="stat-card-content">

        <p>{title}</p>

        <h2>{value}</h2>

        <span>{subtitle}</span>

      </div>

    </div>

  );

}

export default StatCard;