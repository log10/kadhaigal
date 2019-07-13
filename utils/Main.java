import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {

    public static void main(String[] args) throws IOException {
        String x = new String(
                Files.readAllBytes(
                        Paths.get("C:\\Users\\Lokesh\\Desktop\\kadhaigal\\src\\களஞ்சியம்\\சிறுகதைகள்\\தேர்வு.html"
                        )));
        String[] xs = x.replaceAll("\\\\t", "&emsp;&emsp;")
                .replaceAll("(\\\\r)?\\\\n", " <br> ").split(" ");
        StringBuilder sb = new StringBuilder();
        for(String s: xs) {
            sb.append(s.replaceAll("<h>", "<div style=\"text-align: center; font-weight: bold\">")
                    .replaceAll("</h>", "</div>")
                    .replaceAll("<c>", "<div><div style=\"padding-left: 15%\">")
                    .replaceAll("</c>", "</div></div>")
            ).append(" ");
        }
	    System.out.println(sb);
    }
}
