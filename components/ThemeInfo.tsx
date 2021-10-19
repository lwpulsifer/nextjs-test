import React from 'react';

type themeInfoProps = {
  additionalClassNames?: string,
}

const ThemeInfo: React.FC<themeInfoProps> = ({ additionalClassNames = '' }) => {
  return (
    <section className={`${additionalClassNames} text-sm font-bold`} >
      <div className="bg-background">
        Theme inspired by <a href={'http://yayoi-kusama.jp/e/information/'} className="text-link">&nbsp;Yayoi Kusama&nbsp;</a> and Halloween!
      </div>
    </section>
  )
};

export default ThemeInfo;