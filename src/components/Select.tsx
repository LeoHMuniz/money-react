import { searchContext } from '@/defaultLayout/DefaultLayout';
import '../styles/Select.scss';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {

    const [search] = useContext(searchContext);

    return (
        <Select>
            <SelectTrigger className="SelectContainer">
                <SelectValue placeholder="Filtre por" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="SelectContent">
                    <SelectItem className="SelectItem" value="name">Nome</SelectItem>
                    <SelectItem className="SelectItem" value="category">Categoria</SelectItem>
                    <SelectItem className="SelectItem" value="type">Tipo</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
