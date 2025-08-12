// Side.jsx
import { Stack, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Side() {
    return (
        <Stack gap={2} className="col-md-8 mx-auto">
            <Button variant="primary" as={Link} to="/">
                Home
            </Button>
            <hr />
            <ListGroup>
                <ListGroup.Item as={Link} to="/hook1">
                    useEffect훅 (Count)
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook2">
                    useEffect훅 (Clock)
                </ListGroup.Item>
                <ListGroup.Item>useRef훅</ListGroup.Item>
                <ListGroup.Item>useNavigate훅</ListGroup.Item>

                <ListGroup.Item>REST Api (User One)</ListGroup.Item>
                <ListGroup.Item>REST Api (User All)</ListGroup.Item>

                {/* ✅ Todo 메뉴 추가 */}
                <ListGroup.Item as={Link} to="/todos">
                    Todo 리스트
                </ListGroup.Item>
            </ListGroup>
        </Stack>
    );
}
