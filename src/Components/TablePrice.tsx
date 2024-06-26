import { FC } from "react";
import "../styles/components/table-price.scss";

type TTablePriceItem = {
  name: string;
  price: string;
};

type TTablePrice = {
  title: string;
  data: TTablePriceItem[];
};

export const TablePrice: FC<TTablePrice> = ({ title, data }) => {
  return (
    <article className='table-price'>
      <ul className='table-price__list'>
        <li className='table-price__list_title'>{title}</li>
        {data.map((item) => (
          <li className='table-price__list_item'>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
