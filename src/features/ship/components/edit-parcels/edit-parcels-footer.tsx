import { useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { EditAddressFormContext, EditParcelsFormContext } from "../../contexts";
import { ShipFlowSteps } from "../../flows";

export const EditParcelsFooter = () => {
  const { formState: editAddressFormState } = useContext(EditAddressFormContext)!;
  const { formState: editParcelsFormState } = useContext(EditParcelsFormContext)!;

  const navigate = useNavigate();

  const disabled = useMemo(() => {
    return [
      !editParcelsFormState.isValid,
      !editParcelsFormState.isDirty,
    ].some(Boolean)
  }, [editParcelsFormState]);

  const onNext = useCallback(() => {
    if (!editAddressFormState.isValid) {
      return navigate(ShipFlowSteps.EditAddress);
    }
    return navigate(ShipFlowSteps.Rates);
  }, [editAddressFormState, navigate]);

  return (
    <button disabled={disabled} onClick={onNext}>
      Next
    </button>
  )
};