package com.my.spring_basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

//HomeController ctr=new HomeController()
//ctr.showHome() ==> 개발자 주도
//Spring Framework ==> 주도권이 스프링 컨테이너에게 있음 (Inversion of Control -역제어)
//객체생성을 스프링이 알아서
@Controller
public class HomeController {

    @RequestMapping("/") //http://localhost:8080/
    public String showHome(Model model){
        System.out.println("showHome() 메서드 실행됨..."); //sout

        String data ="DB에서 가져온 데이터에요";

        model.addAttribute("data", data);
        model.addAttribute("msg","데이터 가져오기 성공");

        return "home";//뷰 네임
        //접두어+뷰네임+접미어
        //resources/templates/home.html
    }


}
