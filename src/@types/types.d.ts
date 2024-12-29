type ResumeImageData = {
  url: string;
  visible: boolean;
};

type ResumeInfosData = {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  website: string;
};
type ResumeContentData = {
  image: ResumeImageData;
  infos: ResumeInfosData;
};

type ResumeData = {
  content: ResumeContentData;
  // structure: ResumeStructureData;
};
