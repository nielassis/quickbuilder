import { Separator } from "@/components/ui/separator";
import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  Share2,
} from "lucide-react";
import { Fragment, useState } from "react";
import { MultipleDragItemData, MultipleDragList } from "../multiple-drag-list";
import { MenageMultipleItemDialog } from "../multiple-drag-list/menage-multiple-item-dialog";
import { useFormContext } from "react-hook-form";

export const MultipleSections = () => {
  const { getValues } = useFormContext();

  const [sectionToAdd, setSectionToAdd] = useState<MultipleDragItemData | null>(
    null
  );
  const [initialData, setInitialData] = useState<MultipleDragItemData | null>(
    null
  );
  const sectionsKeys: MultipleDragItemData[] = [
    {
      formKey: "socialMedias",
      title: "Redes Sociais",
      icon: Share2,
      titleKey: "name",
      descriptionKey: "username",
    },
    {
      formKey: "experiences",
      title: "Experiências",
      icon: BriefcaseBusiness,
      titleKey: "company",
      descriptionKey: "position",
    },
    {
      formKey: "educations",
      title: "Educação",
      icon: GraduationCap,
      titleKey: "institution",
      descriptionKey: "degree",
    },
    {
      formKey: "skills",
      title: "Habilidades",
      icon: BicepsFlexed,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "languages",
      title: "Idiomas",
      icon: Languages,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "certifications",
      title: "Certificações",
      icon: FileBadge2,
      titleKey: "name",
      descriptionKey: "institution",
    },
    {
      formKey: "projects",
      title: "Projetos",
      icon: Globe,
      titleKey: "name",
      descriptionKey: "description",
    },
  ];

  const onEdit = (section: MultipleDragItemData, index: number) => {
    const currentValues = getValues();
    const currentItems = currentValues.content[section.formKey];

    setSectionToAdd(section);
    setInitialData(currentItems[index]);
  };

  return (
    <div>
      {sectionsKeys.map((section) => (
        <Fragment key={`multiple-section-${section.formKey}`}>
          <Separator className="my-5" />
          <MultipleDragList
            data={section}
            onAdd={() => setSectionToAdd(section)}
            onEdit={(index) => onEdit(section, index)}
          />
        </Fragment>
      ))}

      {sectionToAdd && (
        <MenageMultipleItemDialog
          initialData={initialData}
          data={sectionToAdd}
          open={!!sectionToAdd}
          setOpen={(value) => {
            if (!value) {
              setSectionToAdd(null);
              setInitialData(null);
            }
          }}
        />
      )}
    </div>
  );
};
