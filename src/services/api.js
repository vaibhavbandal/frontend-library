import axios from "axios";

const url = "https://backend-library-production.up.railway.app/api/v1";
// const url = "http://localhost:8000/api/v1";

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

export const getAllLibrarianData = async () => {
    try {
      let token=localStorage.getItem('library-login');
      return await axios.get(`${url}/common/get-all-librarian`,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

export const registerLibrarian = async (postData) => {  
    try {
      let token=localStorage.getItem('library-login');
      return await axios.post(`${url}/admin/register-librarian`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

export const getAllStudentData = async () => {
    try {
      let token=localStorage.getItem('library-login');
      return await axios.get(`${url}/common/get-all-student`,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

export const registerStudent = async (postData) => {  
    try {
      let token=localStorage.getItem('library-login');
      return await axios.post(`${url}/librarian/student-register`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};

// Import Book
export const importBook = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/admin/import-book`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};


// Checking BookCode
export const checkBookCode = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/admin/check-book-code`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};


// get-all-book
export const getAllBook = async () => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.get(`${url}/common/get-all-book`,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

// get-all-bookstore
export const getAllBookStore = async () => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.get(`${url}/common/get-book-store-data`,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
}

// get-book-import-history
export const getBookImportHistory = async () => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.get(`${url}/common/get-book-import-history`,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

export const getBookDataByBookCode = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.get(`${url}/common/get-book-data/${postData}`,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};


export const changePasswordAdmin = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/admin/change-password`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

export const changePasswordLibrarian = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/librarian/change-password`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
}

export const changePasswordStudent = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/student/change-password`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
}



export const issueReturnBook = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.post(`${url}/librarian/issue-return-book`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

export const getIssueReturnHistory = async (postData) => {  
  try {
    let token=localStorage.getItem('library-login');
    return await axios.get(`${url}/common/get-issue-return-history`,postData,{ headers: {"Authorization" : `Bearer ${token}`} });
  } catch (error) {
    console.log("Error while calling postProblems API", error);
  }
};

