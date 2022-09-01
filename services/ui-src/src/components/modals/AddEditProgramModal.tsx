import { useContext } from "react";
// components
import { Form, Modal, ReportContext } from "components";
// utils
import { ReportStatus } from "types";
import {
  calculateDueDate,
  convertDateEtToUtc,
  createReportId,
  useUser,
} from "utils";
// form
import formJson from "forms/internal/aep/addEditProgram.json";
import formSchema from "forms/internal/aep/addEditProgram.schema";

export const AddEditProgramModal = ({
  activeState,
  selectedReportId,
  modalDisclosure,
}: Props) => {
  const { fetchReportsByState, updateReport } = useContext(ReportContext);
  const { full_name } = useUser().user ?? {};

  const addEditProgram = async (formData: any) => {
    // prepare payload
    const programName = formData["aep-programName"];
    const dueDate = calculateDueDate(formData["aep-endDate"]);
    const reportDetails = {
      state: activeState,
      reportId: "",
    };
    const dataToWrite = {
      programName,
      reportingPeriodStartDate: convertDateEtToUtc(formData["aep-startDate"]),
      reportingPeriodEndDate: convertDateEtToUtc(formData["aep-endDate"]),
      dueDate,
      lastAlteredBy: full_name,
    };
    // if an existing program was selected, use that report id
    if (selectedReportId) {
      reportDetails.reportId = selectedReportId;
      // edit existing report
      await updateReport(reportDetails, {
        ...dataToWrite,
      });
    } else {
      // if no program was selected, create new report id
      reportDetails.reportId = createReportId(
        activeState,
        programName,
        dueDate
      );
      // create new report
      await updateReport(reportDetails, {
        ...dataToWrite,
        reportType: "MCPAR",
        status: ReportStatus.NOT_STARTED,
      });
    }
    await fetchReportsByState(activeState);
    modalDisclosure.onClose();
  };

  return (
    <Modal
      data-testid="add-edit-program-modal"
      formId={formJson.id}
      modalDisclosure={modalDisclosure}
      content={{
        heading: "Add a Program",
        actionButtonText: "Save",
        closeButtonText: "Close",
      }}
    >
      <Form
        data-testid="add-edit-program-form"
        id={formJson.id}
        formJson={formJson}
        formSchema={formSchema}
        onSubmit={addEditProgram}
      />
    </Modal>
  );
};

interface Props {
  activeState: string;
  selectedReportId: string | undefined;
  modalDisclosure: {
    isOpen: boolean;
    onClose: any;
  };
}