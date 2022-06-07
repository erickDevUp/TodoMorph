import React, { useContext } from "react";
import "./list.css";
import controlListContext from "../../context/controlListContext";
import DB from "../../hocks/hoockDB/HoockDB";
import ColumnsContext from "../../context/ColumnsContext";
import ThemeContext from "../../context/themeCtx";

const queryDB = {
  DB: "Todo",
  table: "List",
};

const List = ({ name, description, id, step }) => {
  const { listDB, setListDB } = useContext(controlListContext);
  const { dataColumns, setDataColumns } = useContext(ColumnsContext);
  const { theme } = useContext(ThemeContext);
  let column = [];
  column = dataColumns.split(" ");

  const stepColumn = (action) => {
    action == "step" ? step++ : step--;

    const { update, read } = DB(queryDB.DB, queryDB.table);
    update(id, {
      name,
      description,
      step: step,
    });
    read(setListDB);
  };
  const deleteList = () => {
    const { sup, read } = DB(queryDB.DB, queryDB.table);
    sup(id);
    read(setListDB);
  };

  return (
    <div className={"list container-child-princiapl" + theme}>
      <button className="btnDelete text-nmf-1" onClick={() => deleteList()}>
        X
      </button>
      <h4 className="nameList text-nmf-1">{name}</h4>
      <p className="descList text-nmf">{description}</p>
      <div className="containerBtnList">
        {step != 0 && (
          <button
            className={"btnStep text-nmf-1 btnBefore btn" + theme}
            onClick={() => stepColumn("before")}
          >
            ⋘
          </button>
        )}
        {step != column.length - 1 && (
          <button
            className={"btnStep text-nmf-1 btnNext btn" + theme}
            onClick={() => stepColumn("step")}
          >
            ⋙
          </button>
        )}
      </div>
    </div>
  );
};
export default React.memo(List);
