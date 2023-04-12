import {useTheme} from "next-themes";
import Image from "next/image";
import {useEffect, useState} from "react";
import {DarkModeSVG, LightModeSVG} from "assets/images";

export default function DarkMode() {
  const {theme, setTheme} = useTheme();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const onSwitchTheme = () => {
    theme !== "light" ? setTheme('light') : setTheme("dark");
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      {theme === 'light' && <button onClick={onSwitchTheme} className={`hs-dark-mode-active:hidden ${theme === 'light' ? 'block' : 'hidden'} hs-dark-mode group flex items-center`} data-hs-theme-click-value="dark">
        <Image src={LightModeSVG} alt="light" />
      </button>}
      {theme !== 'light' && <button onClick={onSwitchTheme} className={`hs-dark-mode-active:block ${theme !== 'light' ? 'flex' : 'hidden'} hs-dark-mode group  items-center`} data-hs-theme-click-value="light">
        <Image src={DarkModeSVG} alt="dark" />
      </button>}
    </>
  );
}
