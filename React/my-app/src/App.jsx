import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyComp1 from './components/MyComp1';
import MyComp2 from './components/MyComp2';
import PageNotFound from './components/PageNotFound';
import Side from './components/Side';
import UseEffectHook from './components/UseEffectHook';
import TimerClock from './components/TimerClock';
import UserDetail from './components/UserDetail';

// ✅ TodoApp 추가 (경로는 네가 둔 위치에 맞게)
import TodoApp from './components/todo/TodoApp';

// ⚠️ Boards가 없다면 임시로 주석 처리하거나 컴포넌트를 만들어줘
// import Boards from './components/Boards';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col>
                            <Header />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={3} md={4} lg={4} className="d-none d-sm-block">
                            <Side />
                        </Col>

                        <Col xs={12} sm={9} md={8} lg={8}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/comp1" element={<MyComp1 />} />
                                <Route path="/comp2" element={<MyComp2 />} />
                                <Route path="/hook1" element={<UseEffectHook />} />
                                <Route path="/hook2" element={<TimerClock />} />
                                <Route path="/users/:id" element={<UserDetail />} />

                                {/* ✅ Todo 라우트 추가 */}
                                <Route path="/todos" element={<TodoApp />} />

                                {/* <Route path="/boards" element={<Boards />} /> */}

                                <Route path="/*" element={<PageNotFound />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
