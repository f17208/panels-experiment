import { FC } from "react";
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const dummyFormSchema = yup.object().shape({
  field1: yup.string().required(),
  field2: yup.string().required(),
});

export type DummyForm = {
  field1: string;
  field2: string;
}

export const useDummyForm = function(params: UseFormProps<DummyForm>) {
  return useForm<DummyForm>({
    resolver: yupResolver(dummyFormSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    ...params,
  })
}

export type EditAddressFormProps = UseFormReturn<DummyForm> & {
  onSubmit: (values: DummyForm) => void;
}

export const EditAddressForm: FC<EditAddressFormProps> = ({
  onSubmit,
  handleSubmit,
  register,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("field1")} placeholder="address 1" />
      </div>
      <div>
        <input {...register("field2")} placeholder="address 2" />
      </div>
      <input type="submit" />
    </form>
  );
}

export type EditParcelsFormProps = UseFormReturn<DummyForm> & {
  onSubmit: (values: DummyForm) => void;
}

export const EditParcelsForm: FC<EditParcelsFormProps> = ({
  onSubmit,
  handleSubmit,
  register,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("field1")} placeholder="parcel 1" />
      </div>
      <div>
        <input {...register("field2")} placeholder="parcel 2" />
      </div>
      <input type="submit" />
    </form>
  );
}
