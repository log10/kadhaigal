import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {

    public static void main(String[] args) throws IOException {
        String x = new String(
                Files.readAllBytes(
                        Paths.get("C:\\Users\\loghithavani\\Desktop\\Development\\kadhaigal\\utils\\உள்ளீடு.html"
                        )));
        String[] xs = x.replaceAll("\\\\t( )?", "&emsp;&emsp;")
                .replaceAll("(\r)?\n"," <br> ")
                .replaceAll("<s (.*?)>", "<span இணைப்பு=\"$1\" class=\"இணைப்பு\">")
                .replaceAll("<se (.*?)>", "<span வெளி_இணைப்பு=\"$1\" class=\"இணைப்பு\">")
                .split(" ");
        StringBuilder sb = new StringBuilder();
        for(String s: xs) {
            sb.append(s.replaceAll("<h>", "<div style=\"text-align: center; font-weight: bold\">")
                    .replaceAll("</h>", "</div>")
                    .replaceAll("<c>", "<div><div style=\"padding-left: 15%\">")
                    .replaceAll("</c>", "</div></div>")
                    .replaceAll("</s>", "</span>")
            ).append(" ");
        }
        //System.out.println(sb);
        PrintWriter pw = new PrintWriter(new File("C:\\Users\\loghithavani\\Desktop\\Development\\kadhaigal\\utils\\வெளியீடு.html"));
        pw.println(sb);
        pw.close();
    }
}
