package com.my.spring_basic.service;

import com.my.spring_basic.dao.MemberDAO;
import com.my.spring_basic.domain.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberDAO memberDAO;


    @Override
    public int createMember(MemberDTO user) {
        //비밀번호 암호화 처리

        return memberDAO.createMember(user);
    }

    @Override
    public List<MemberDTO> listMember() {
        return null;
    }
}
