import "./App.css";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  CopyIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { API } from "./backend";
import { useEffect, useState } from "react";
import { isUri } from "valid-url";


function App() {
  //INITIALIZATIONS
  const toast = useToast();
  const domain = "linkz.cf/";

  const [values, setValues] = useState({
    link: "",
    shortid: "",
    error: "",
    loading: false,
    success: false,
  });

  const { link, shortid, error, loading, success } = values;

  const [linklist, setLinkList] = useState([]);



  useEffect(() => {
    let k = loadStorage();
    setLinkList(k);
    setValues({ ...values, success: false, error: false });
  }, [success]);


  const loadStorage = () => {
    if (typeof window != undefined) {
      if (localStorage.getItem("links")) {
        return JSON.parse(localStorage.getItem("links"));
      }
    }
  };

  

  const isValid = (str) => {
    if (str === "") return true;
    str = str.trim();
    if (str.length < 2 || str.length > 10) {
      return false;
    }
    var alphabet =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    var nonAlphabetic = new RegExp(
      "[^" + alphabet.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]"
    );
    return !nonAlphabetic.test(str);
  };

  const validate = (url, short) => {
    let flag = 0;
    if (!isUri(url)) {
      flag = 1;
      return flag;
    }
    if (!isValid(short)) {
      flag = 2;
      return flag;
    }
    return flag;
  };



  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      success: false,
      [name]: event.target.value,
    });
  };

  

  const newlink = (linkdata) => {
    return fetch(`${API}newlink`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(linkdata),
    }).then((response) => {
      return response.json();
    });
  };

 
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, success: false, loading: true });


    let r = validate(link, shortid);
    if (r !== 0) {
      if (r === 1) {
        setValues({
          ...values,
          error: "Invalid URL. Please check it.",
          loading: false,
        });
      } else {
        setValues({
          ...values,
          error:
            "Back-Half length=[2 to 10] and can only have A-Z, a-z, 0-9, -, _.",
          loading: false,
        });
      }
    }
    else {
      newlink({ link, shortid }).then((data) => {
        if (data.error) {
          console.log(data.error);
          setValues({
            ...values,
            error: data.error,
            loading: false,
            success: false,
          });

          setLinkList(loadStorage());
        } else {
          let links = [];
          if (typeof window != undefined) {
            if (localStorage.getItem("links")) {
              links = JSON.parse(localStorage.getItem("links"));
            }
            links.push({
              ...data,
            });
            localStorage.setItem("links", JSON.stringify(links));
          }
          setValues({
            ...values,
            success: "Successfully created the short URL!",
            loading: false,
            error: false,
            link: "",
            shortid: "",
          });
        }
      });
    }
  };

 

  const showError = () => {
    toast({
      title: "Error",
      description: error,
      isClosable: true,
      status: "error",
      duration: "6000",
    });
  };
  const showSuccess = () => {
    toast({
      title: "Success",
      description: success,
      isClosable: true,
      status: "success",
      duration: "6000",
    });
  };

  const showLoading = () => {
    console.log(loading);
    return (
      <Center padding="20px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  };

  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" paddingLeft="0.5rem">
        <IconButton
          color="white"
          bgColor="#3182ce"
          icon={<CheckIcon />}
          onClick={onSubmit}
        />
        <IconButton
          color="white"
          bgColor="#3182ce"
          icon={<CloseIcon />}
          onClick={onCancel}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <Button
          size="sm"
          onClick={onEdit}
          marginTop="10px"
          bgColor="#3182ce"
          color="white"
        >
          Edit Back-Half
        </Button>
      </Flex>
    );
  }

 

  return (
    <div className="App">
  
      <Flex
        paddingTop="2rem"
        paddingRight="0.5rem"
        width="full"
        align="center"
        justifyContent="center"
        paddingLeft="0.5rem"
      >
        <FormControl id="link" width="45rem">
          <Input
            borderColor="#3182ce"
            borderWidth="2px"
            type="link"
            placeholder="Long URL"
            className="input-form"
            size="lg"
            value={link}
            onChange={handleChange("link")}
          />
        </FormControl>
      </Flex>

      <Box padding="0.5rem">
        <Editable
          marginTop="20px"
          textAlign="center"
          defaultValue={shortid}
          isPreviewFocusable={false}
          placeholder="ex: backhalf in linkz.cf/backhalf"
        >
          {(props) => (
            <>
              {shortid !== "" && (
                <EditablePreview
                  border="2px"
                  borderColor="#3182ce"
                  width="10rem"
                />
              )}
              <EditableInput
                border="2px"
                borderColor="#3182ce"
                width="15rem"
                onChange={handleChange("shortid")}
              />
              <EditableControls {...props} />
            </>
          )}
        </Editable>
      </Box>

      <Center paddingTop="15px">
        <Button
          bgColor="#3182ce"
          color="white"
          width="10rem"
          minW="7rem"
          className="Button"
          onClick={onSubmit}
        >
          Shorten URL
        </Button>
      </Center>
      {loading && showLoading()}
      <Center>
        {linklist !== undefined && linklist !== [] && displayAllLinks()}
      </Center>
      {error && showError()}
      {success && showSuccess()}
    </div>
  );
}

export default App;

