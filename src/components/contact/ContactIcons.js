import Link from "next/link";
import Image from "next/image";
import data from "../../constants/contact";
import { StyledSocialIcons,Li } from "./ContactIconsStyles";

const ContactIcons = () => {
  return (
    <>
      <StyledSocialIcons>
        {data.map(({ id, label, link, icon }) => (
          <Li key={id}>
            <Link
              tabindex={id}
              href={link}
              target="_blank"
              title={label}
              rel="noopener noreferrer"
              aria-label={`follow me on ${label}`}
            >
              <a>
                <Image
                  width={32}
                  height={32}
                  // layout="fixed"
                  src={icon}
                  alt={label}
                />
              </a>
            </Link>
          </Li>
        ))}
      </StyledSocialIcons>
    </>
  );
};

export default ContactIcons;
