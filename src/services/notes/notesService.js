const apiUrl = import.meta.env.VITE_URL_NOTES;

const obtainData = async (apiUrl, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      console.log("Can't get response, STATUS : ", response.status);
    }

    return await response.json();
  } catch (error) {
    console.log("Error obtaining data :", error);
    throw error;
  }
};

const getAllNotes = async () => {
  return await obtainData(apiUrl);
};

const addNewNote = async (body) => {
  return await obtainData(apiUrl, "POST", body);
};

const updateNote = async (id, body) => {
  const urlWithId = `${apiUrl}/${id}`;
  return await obtainData(urlWithId, "PUT", body);
};

const deleteNote = async (id) => {
  const urlWithId = `${apiUrl}/${id}`;
  await obtainData(urlWithId, "DELETE");
  return id;
};

export default {
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
};
