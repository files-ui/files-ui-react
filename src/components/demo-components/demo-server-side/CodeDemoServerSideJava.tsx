import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoServerSideJava = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoServerSideJava;

const splittedCodeJS = `// FilesUiResponse.java
//...imports
public class FilesUiResponse {
    Boolean success;
    String message;
    Object payload;
//..more code
}

// FileUploadController.java
//...imports
@CrossOrigin(origins = "*")
@RestController
public class FileUploadController {
    //..more code
    @PostMapping("/file")
    public ResponseEntity<FilesUiResponse> uploadFile(
            @RequestParam("file") MultipartFile multipartFile
    ) {
        try {
            FileItem resultFileItem = FileUploadUtil.saveFileInDir(multipartFile);
            FilesUiResponse response = new FilesUiResponse(
                    true,
                    "Files upladed successfully",
                    resultFileItem);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (IOException ioe) {
            FilesUiResponse response = new FilesUiResponse(
                    false,
                    "Error on upload",
                    null);
            System.out.println(ioe.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //... more code
}

// FileUploadUtil.java
public class FileUploadUtil {
    public static String UPLOAD_PATH = "Files-Upload";

    public static FileItem saveFileInDir(MultipartFile multipartFile) throws IOException {
        Path uploadDirectory = Paths.get(UPLOAD_PATH);

        String fileId = createUUID();
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

        String extention = FileUploadUtil.getExtensionByStringHandling(fileName).get();

        String finalFileName = createUUIDfileName(extention);
        String mimeType = multipartFile.getContentType();

        checkDircectoryIfExists(uploadDirectory);
        long size = multipartFile.getSize();


        System.out.println("fileName: " + fileName);
        System.out.println("newFIleName: " + finalFileName);
        System.out.println("extention: " + extention);
        System.out.println("size: " + size);

        try (InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadDirectory.resolve(fileName);

            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);

            FileItem finalFileItem = new FileItem(
                    fileId,
                    finalFileName,
                    size,
                    mimeType,
                    "./UPLOAD_PATH"
            );

            // add to database here...

            return finalFileItem;
        } catch (IOException ioe) {
            throw new IOException("Error on saving uploaded file: " + fileName, ioe);
        }
    }
    public static String createUUID() {
        UUID uuid = UUID.randomUUID();
        String fileId = uuid.toString();
        return fileId;
    }

    public static String createUUIDfileName(String extention) {
        return createUUID() + "." + extention;
    }

    // more code...
}

// FileItem.java
// ..imports
public class FileItem {

    public FileItem() { }

    public FileItem(String idFileItem, String name, long size, String mimeType, String path) {
        this.idFileItem = idFileItem;
        this.name = name;
        this.size=size;
        this.mimeType = mimeType;
        this.path = path;
        this.creationTime = new Date();
        this.status = true;
    }
    @JsonIgnore
    private String idFileItem;

    private long size;

    @JsonProperty("type")
    private String mimeType;

    private String name;

    @JsonIgnore
    private String path;

    private Date creationTime;

    @JsonIgnore
    private Boolean status;

    //more code...
}
`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = ``;

const completeCodeTS = ``;
