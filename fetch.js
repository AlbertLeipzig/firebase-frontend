import axios from 'axios';

const url = "https://api.mymemory.translated.net/get?q=hello!&langpair=en%7Cde"

async function getUser() {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }