import Link from "next/link";
import Image from "next/image";
import data from "../../constants/contact";

const ContactIcons = () => {
  return (
    <ul>
      {data.map(({ id, label, link, icon }) => (
        <li key={id}>
          <Link
            tabindex={id}
            href={link}
            target="_blank"
            title={label}
            rel="noopener noreferrer"
            aria-label={`follow me on ${label}`}
          >
            <Image
              width={24}
              height={24}
              layout="fixed"
              src={icon}
              alt={label}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactIcons;
