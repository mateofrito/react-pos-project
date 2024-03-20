import React from "react";

function TopNavFunctionButtons({ sendOrder, onLogout, onDuplicate }) {
  return (
    <div className="action-buttons-row">
      <button
        className="action-button"
        style={{ backgroundColor: "darkred", color: "white" }}
        onClick={onLogout}
      >
        Return
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 1 */
        }}
      >
        Save
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 1 */
        }}
      >
        POS Functions
      </button>
      <button className="action-button" onClick={onDuplicate }>
        Dup
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 1 */
        }}
      >
        Change Seat
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 1 */
        }}
      >
        Delete
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 1 */
        }}
      >
        Modify
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 2 */
        }}
      >
        Sub
      </button>
      <button
        className="action-button"
        onClick={() => {
          /* Action 3 */
        }}
      >
        Fire Check
      </button>
      <button
        className="action-button"
        style={{ backgroundColor: "purple", color: "white" }}
        onClick={() => {
          /* Action 3 */
        }}
      >
        Print
      </button>
      <button onClick={sendOrder} className="action-button-send">
        Send Order
      </button>
    </div>
  );
}

export default TopNavFunctionButtons;
