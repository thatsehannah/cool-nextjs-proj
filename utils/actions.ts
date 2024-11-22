'use server';

export const createUserAction = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const rawData = Object.fromEntries(formData);
  console.log({ firstName, lastName });
  console.log(rawData);
};
