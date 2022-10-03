import { useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { EditAddressFormContext, EditParcelsFormContext } from "../../contexts";
import { ShipFlowSteps } from "../../flows";

export const EditAddressFooter = () => {
  const { formState: editAddressFormState } = useContext(EditAddressFormContext)!;
  const { formState: editParcelsFormState } = useContext(EditParcelsFormContext)!;

  const navigate = useNavigate();

  const disabled = useMemo(() => {
    return [
      !editAddressFormState.isValid,
      !editAddressFormState.isDirty,
    ].some(Boolean)
  }, [editAddressFormState]);

  const onNext = useCallback(() => {
    if (!editParcelsFormState.isValid) {
      return navigate(ShipFlowSteps.EditParcels);
    }
    return navigate(ShipFlowSteps.Rates);
  }, [editParcelsFormState, navigate]);

  return (
    <button disabled={disabled} onClick={onNext}>
      Next
    </button>
  )
};
