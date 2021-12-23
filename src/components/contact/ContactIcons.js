import Link from "next/link";
import Image from "next/image";
import data from "../../constants/contact";

const ContactIcons = () => (
  <ul>
    {data.map((i) => (
      <li>
        <Link
          key={i.id}
          tabindex={i.id}
          href={i.link}
          target="_blank"
          title={i.label}
          rel="noopener noreferrer"
          aria-label={`follow me on ${i.label}`}
        >
          <Image
            width={24}
            height={24}
            layout="fixed"
            src={i.icon}
            alt={i.label}
          />
        </Link>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
