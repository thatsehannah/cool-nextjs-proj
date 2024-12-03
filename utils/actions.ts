'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUserAction = async (prevState: any, formData: FormData) => {
  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000)); //simulating a delay
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser: User = {
    firstName,
    lastName,
    id: Date.now().toString(),
  };

  try {
    await saveUser(newUser);
    revalidatePath('/actions'); //revalidating cache for action spage
    return 'User created successfully...';
  } catch (error) {
    console.log(error);
    return 'Failed to create user...';
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf-8' });
  const users = result ? JSON.parse(result) : [];

  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};

export const deleteUserAction = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);

  try {
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions'); //revalidating cache for actions page
  } catch (error) {
    console.log(error);
  }
};

export const removeUserAction = async (id: string) => {
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);

  try {
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions'); //revalidating cache for actions page
  } catch (error) {
    console.log(error);
  }
};
