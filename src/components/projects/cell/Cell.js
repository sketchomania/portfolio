import { Container } from "./CellStyles";
import Image from "next/image";

const Cell = ({ data }) => {
  return (
    <Container>
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <time className="published">
            {dayjs(data.date).format("MMMM, YYYY")}
          </time>
        </header>
        <a href={data.link} className="image">
          <Image
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt={data.title}
          />
        </a>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </Container>
  );
};

export default Cell;
