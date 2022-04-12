import axios from "axios";

const url = "http://localhost:8000/api/v1";

export const adminLogin = async (postData) => {
    try {
      return await axios.post(`${url}/admin/login`, postData);
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
}

export const librarianLogin = async (postData) => {
  try {
    return await axios.post(`${url}/librarian/login`, postData);
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

export const studentLogin = async (postData) => {
  try {
    return await axios.post(`${url}/student/login`, postData);
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
}

export const getAdminData = async () => {
    try {
      let token=localStorage.getItem('library-login');
      return await axios.get(`${url}/admin/admin-data`,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

export const getLibrarianData = async () => {
    try {
      let token=localStorage.getItem('library-login');
      return await axios.get(`${url}/librarian/librarian-data`,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

export const getStudentData = async () => {
    try {
      let token=localStorage.getItem('library-login');
      return await axios.get(`${url}/student/student-data`,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

