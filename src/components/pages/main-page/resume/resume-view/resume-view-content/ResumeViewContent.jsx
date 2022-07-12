const ResumeViewContent = ({ id, data }) => {
  switch (id) {
    case 'education':
      return <ViewDefaultContent data={data} />;
    case 'work':
      return <ViewDefaultContent data={data} />;
    case 'skills':
      return <ViewSkillsContent data={data} />;

    default:
      throw new Error('Unknown content!');
  }
};

const ViewDefaultContent = ({ data }) => {
  const { title, subtitle, dateInfo, text } = data;

  return (
    <div className='data-content'>
      <h3 className='data-content__title'>{title}</h3>
      <div className='data-content-subtitles'>
        <h4 className='data-content-subtitles__subtitle'>{subtitle}</h4>
        <span className='data-content-subtitles__date-info'>{dateInfo}</span>
      </div>
      <p className='data-content__desk'>{text}</p>
    </div>
  );
};

const ViewSkillsContent = ({ data }) => {
  const { title, progress } = data;

  return (
    <>
      <div className='SkillsBar' data-percent={`${progress}%`}>
        <div className='SkillsBar-title'>
          <span>{title}</span>
        </div>
        <div className='SkillsBar-bar' style={{ width: `${progress}%` }}></div>
        <div className='SkillsBar-percent'>{progress}%</div>
      </div>
    </>
  );
};

export default ResumeViewContent;
