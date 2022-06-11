export default function ServiceList({ services }) {
    const serviceList = services.map(s =>
      <li
        key={s._id}
      >
        {s.emoji}  
        {s.name}
        -
        ${s.price}
      </li>
    );
    return (
      <ul className="ServiceList">
        {serviceList}
      </ul>
    );
  } 


    