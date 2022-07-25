import Service from "./ServiceBlock";

export default function ServicesSection() {
  return (
    <div className="services-section">
      <h2>my projects</h2>
      <div className="services-list">
        <Service
          text="MassCleanAir"
          img="https://assets.codepen.io/6060109/agency-service-1.png"
        />
        <Service
          text="TRECH Project"
          img="https://assets.codepen.io/6060109/agency-service-2.png"
        />
        <Service
          text="Smaller Github Projects"
          img="https://assets.codepen.io/6060109/agency-service-3.png"
        />
      </div>
    </div>
  )
}