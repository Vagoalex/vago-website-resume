const HeroBannerItems = ({ bannerArr, typeClass }) => {
  return (
    <>
      {bannerArr.map((item, index) => {
        const hiddenClass = 'Hero-banner-item-hidden';

        return (
          <div
            key={index}
            className={`Hero-banner-${typeClass}__item ${
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

export default HeroBannerItems;
