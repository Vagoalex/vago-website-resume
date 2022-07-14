const HeaderBannerItems = ({ bannerArr, typeClass }) => {
  return (
    <>
      {bannerArr.map((item, index) => {
        const hiddenClass = 'Header-banner-item-hidden';

        return (
          <div
            key={index}
            className={`Header-banner-${typeClass}__item ${
              item === '.' ? hiddenClass : ''
            }`}
          >
            {item}
          </div>
        );
      })}
    </>
  );
};

export default HeaderBannerItems;
