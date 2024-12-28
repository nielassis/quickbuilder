import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resumes-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo curriculo"
      description="Crie do zero um novo curriculo para o seu perfil profissional"
      icon={<Plus size={50} />}
    />
  );
};
