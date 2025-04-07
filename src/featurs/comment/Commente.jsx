import './commente.scss';

export const Commente = ({ star, name, title }) => {
  return (
    <div className="commente">
      <img src={star} alt="" />
      <h2>{title}</h2>
      <b>{name}</b>
    </div>
  )
}
