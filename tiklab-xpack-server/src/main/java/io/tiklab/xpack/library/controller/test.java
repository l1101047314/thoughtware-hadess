package io.tiklab.xpack.library.controller;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.util.ClassUtils;
import org.springframework.util.CollectionUtils;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.FileTime;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class test {

    public static void main(String[] args) throws IOException {
        /*String folderPath = "/Users/limingliang/tiklab/123/test"; // 要删除的文件夹路径

        int ceil =(int) Math.ceil((double) 7 / 2);
        System.out.println("ceil:"+ceil);

        int dividend = 10;  // 被除数
        int divisor = 3;   // 除数
        try {
            FileUtils.deleteDirectory(new File(folderPath));
            System.out.println("文件夹删除成功！");
        } catch (IOException e) {
            System.out.println("文件夹删除失败：" + e.getMessage());
        }*/



        File file = new File("/Users/limingliang/tiklab/tiklab-xcode-ee/backup");
        File[] files = file.listFiles();
        List<File> collected = Arrays.stream(files).sorted(Comparator.comparing(a -> a.lastModified()))
                .filter(b->b.getName().contains("spotbugs")).collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(collected)){
            for (int a=0;a<collected.size();a++) {
                Path path = Paths.get(collected.get(a).getPath());
                BasicFileAttributes attributes = Files.readAttributes(path, BasicFileAttributes.class);

                //文件创建毫秒
                long millis = attributes.creationTime().toMillis();
                //当前毫秒
                long presentMillis = System.currentTimeMillis();
                int validMillis = 1 * 3600;

                System.out.println("文件"+collected.get(a).getName()+",创建时间"+new Timestamp(millis));
                System.out.println("文件"+collected.get(a).getName()+",失效时间"+new Timestamp(millis + validMillis));
                //创建时间已经超过有效时间
                if (millis + validMillis <= presentMillis) {
                    System.out.println("文件"+collected.get(a).getName()+"失效了");
                    //所有文件都失效了，保留最后一个
                    if (collected.size()-1==a){
                        break;
                    }
                    //删除文件
                    FileUtils.deleteQuietly(collected.get(a));
                }
            }
        }
    }

}
