import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

import RootLayout from "@/app/layout";

export default function Dos() {
  return (
    <RootLayout>
        <FontAwesomeIcon
          icon={faFontAwesome}
          className="text-9xl bg-blue-400"
        />
    </RootLayout>
  );
}
